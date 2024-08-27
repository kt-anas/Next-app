 
import { GetServerSideProps } from 'next';
import React from 'react';

interface JokeProps {
  joke: string;
}

const JokePage: React.FC<JokeProps> = ({ joke }) => {
  return (
    <div>
      <h1>Random Joke</h1>
      <p>{joke}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<JokeProps> = async () => {
  // Fetch a random joke from an API
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await res.json();

  // Return the joke as a prop
  return { props: { joke: `${data.setup} - ${data.punchline}` } };
};

export default JokePage;
