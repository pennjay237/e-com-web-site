import { Link } from "react-router-dom"
import styles from "./Breadcrumb.module.css"

function Breadcrumb({ items }) {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          {item.path ? <Link to={item.path}>{item.label}</Link> : <span>{item.label}</span>}
          {index < items.length - 1 && <span className={styles.separator}>/</span>}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
