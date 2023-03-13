import { useEffect, useState } from 'react';

const useTesting = () => {
  const [allTesting, setAllTesting] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/testing')
            .then(res => res.json())
            .then(data => setAllTesting(data))
    }, [allTesting])
    return [allTesting, setAllTesting];
};

export default useTesting;