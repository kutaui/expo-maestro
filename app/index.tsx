import {
	Text,
	View,
	TextInput,
	Button,
	Alert,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

export default function Index() {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		const testEmail = 'test@gmail.com'
		const testPassword = 'password'

		if (email === testEmail && password === testPassword) {
			router.replace('jobs')
		} else {
			Alert.alert('Login Failed', 'Invalid email or password.')
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				style={styles.input}
			/>
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={styles.input}
			/>
			<Button
				title="Login"
				onPress={handleLogin}
				accessibilityLabel="Login Button"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5F5F5',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#333',
	},
	input: {
		width: '100%',
		borderColor: '#007BFF',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 15,
		padding: 10,
		backgroundColor: '#FFFFFF',
	},
})
