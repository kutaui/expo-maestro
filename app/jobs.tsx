import { Text, View, FlatList, StyleSheet } from 'react-native'
import JobCard from '@/components/JobCard'
import jobsData from '../data.json'

export default function Jobs() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Job Listings</Text>
			<FlatList
				data={jobsData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<JobCard
						jobName={item.title}
						companyName={item.company}
						salary={item.salary}
						applied={item.applied}
						id={item.id}
					/>
				)}
			/>
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
})
