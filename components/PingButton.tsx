import { FC, useState } from 'react'
import styles from '../styles/PingButton.module.css'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import * as Web3 from '@solana/web3.js'

const PROGRAM_ID = new Web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa")
const PROGRAM_DATA_ACCOUNT = new Web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod")

export const PingButton: FC = () => {
	const { connection } = useConnection()
	const { publicKey, sendTransaction } = useWallet()

    const onClick = () => {
        if (!connection || !publicKey) {
			alert("Please connect your wallet")
		}

		const transaction = new Web3.Transaction()
		const instruction = new Web3.TransactionInstruction({
			keys: [
				{
					pubkey: PROGRAM_DATA_ACCOUNT,
					isSigner: false,
					isWritable: true
				}
			],
			programId: PROGRAM_ID
		})

		transaction.add(instruction)
		sendTransaction(transaction, connection).then(signature => {
			console.log(`https://explorer.solana.com/tx/${signature}?cluster=devnet`)
		})
    }
    
	return (
		<div className={styles.buttonContainer} onClick={onClick}>
			<button className={styles.button}>Ping!</button>
		</div>
	)
}

