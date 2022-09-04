import { FC, useState } from 'react'
import styles from '../styles/PingButton.module.css'

const PROGRAM_ID = ""
const PROGRAM_DATA_ACCOUNT = ""

export const PingButton: FC = () => {

    const onClick = () => {
        
    }
    
	return (
		<div className={styles.buttonContainer} onClick={onClick}>
			<button className={styles.button}>Ping!</button>
		</div>
	)
}

