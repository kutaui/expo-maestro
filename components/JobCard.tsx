import { Ionicons } from '@expo/vector-icons'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

type JobCardProps = {
	jobName: string
	companyName: string
	salary: number
	applied: boolean
	id: string
}

const JobCard = ({
	jobName,
	companyName,
	salary,
	applied,
	id,
}: JobCardProps) => {
	const router = useRouter()

	const handlePress = () => {
		console.log(`Navigating to job/${id}`)
		router.push(`job/${id}`)
	}

	return (
		<TouchableOpacity onPress={handlePress} style={styles.card}>
			{applied && (
				<View style={styles.appliedIndicator}>
					<Ionicons name="checkmark-circle" size={24} color="green" />
				</View>
			)}

			<View style={styles.iconContainer}>
				<Feather name="briefcase" size={48} color="black" />
			</View>

			<View style={styles.detailsContainer}>
				<Text style={styles.jobName}>{jobName}</Text>
				<Text style={styles.companyName}>{`Company: ${companyName}`}</Text>
				<Text style={styles.salary}>{`Salary: $${salary}`}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		padding: 16,
		backgroundColor: '#f0f0f0',
		borderRadius: 8,
		marginBottom: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 1,
		elevation: 2,
	},
	appliedIndicator: {
		position: 'absolute',
		top: 8,
		right: 8,
	},
	iconContainer: {
		marginRight: 16,
	},
	detailsContainer: {
		flex: 1,
	},
	jobName: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	companyName: {
		fontSize: 14,
		color: '#555',
	},
	salary: {
		fontSize: 14,
		color: '#555',
	},
})

export default JobCard
