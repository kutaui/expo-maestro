import { useLocalSearchParams } from 'expo-router'
import { Text, View, StyleSheet } from 'react-native'
import jobsData from '../../data.json'

export default function JobDetail() {
	const { id } = useLocalSearchParams()

	const job = jobsData.find((job) => job.id === id)

	if (!job) {
		console.error('Job ID is undefined or not found')
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Error: Job not found</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Job Detail</Text>
			<View style={styles.card}>
				<Text style={styles.jobId}>Job ID: {job.id}</Text>
				<Text style={styles.jobName}>Job Title: {job.title}</Text>
				<Text style={styles.companyName}>Company: {job.company}</Text>
				<Text style={styles.salary}>Salary: ${job.salary}</Text>
				<Text style={styles.applied}>
					Applied: {job.applied ? 'Yes' : 'No'}
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#F5F5F5',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#333',
	},
	card: {
		padding: 16,
		backgroundColor: '#fff',
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 1,
		elevation: 2,
	},
	jobId: {
		fontSize: 16,
		color: '#555',
		marginBottom: 8,
	},
	jobName: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#333',
	},
	companyName: {
		fontSize: 16,
		color: '#666',
		marginBottom: 8,
	},
	salary: {
		fontSize: 16,
		color: '#333',
		marginBottom: 8,
	},
	applied: {
		fontSize: 16,
		color: '#007BFF',
	},
})
