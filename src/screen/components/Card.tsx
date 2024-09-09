// // src/components/Card.tsx
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// interface CardProps {
//   title: string;
//   description: string;
//   onPress: () => void;
// }

// const Card: React.FC<CardProps> = ({ title, description, onPress }) => {
//   return (
//     <TouchableOpacity style={styles.card} onPress={onPress}>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.description}>{description}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

// export default Card;