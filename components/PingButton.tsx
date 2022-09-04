import { FC, useState } from 'react'
import styles from '../styles/PingButton.module.css'

const PROGRAM_ID = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa"
const PROGRAM_DATA_ACCOUNT = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod"

export const PingButton: FC = () => {

    const onClick = () => {
        
    }
    
	return (
		<div className={styles.buttonContainer} onClick={onClick}>
			<button className={styles.button}>Ping!</button>
		</div>
	)
}

