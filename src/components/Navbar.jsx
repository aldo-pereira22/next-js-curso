import Link from "next/link"
import styles from "../styles/NavBar.module.css"

export default function NavBar(){
    return (
        <div>
        <ul className={styles.navbar} >
          <li>
            <Link href="/products"> Produtos </Link>
          </li>

          <li>
            <Link href="/about"> Sobre Nós </Link>
          </li>

          <li>
            <Link href="/"> Home </Link>
          </li>

        </ul>
      </div>
    )
}