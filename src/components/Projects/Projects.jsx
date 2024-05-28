import React from 'react'
import styles from "./projects.module.css"
import Link from 'next/link'

import Image from 'next/image'

const Projects = ({img,name,link}) => {
  return (
    <div className={styles.container}>
        <Link href={link}><div className={styles.box}>
          <Image src={img} alt="" width={400} height={200}/>
          <p>{name}</p>
        </div>
        </Link>
    </div>
  )
}

export default Projects