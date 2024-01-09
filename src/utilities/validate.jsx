import {useState} from 'react';

export default function validate(){
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    
        if (event.target.value.trim().length > 0) {
          console.log('✅ Input is not empty');
        } else {
          console.log('⛔️ Input is empty');
        }
      };

    return 
}