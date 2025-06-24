"use client"

import { createContext, useContext, useReducer } from "react"

const AppContext = createContext()

const initialState = {
  user: null,
  cart: [],
  wishlist: [],
  isAuthenticated: false,
}

function appReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      }
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    case "ADD_TO_CART":
      const existingItem = state.cart.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        ),
      }
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      }
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
