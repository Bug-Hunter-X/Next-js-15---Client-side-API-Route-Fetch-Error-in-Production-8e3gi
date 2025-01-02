```javascript
// pages/about.js
import { getServerSideProps } from 'next';

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();
  return {
    props: { data },
  };
}
```
```javascript
//pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello!' });
}
```