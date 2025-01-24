```javascript
import { useRouter } from 'next/router';
import { useState } from 'react';

function MyComponent() {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  const handleClick = () => {
    if (!redirecting) {
      setRedirecting(true);
      router.push(router.asPath);
    }
  };

  return (
    <button onClick={handleClick} disabled={redirecting}>
      Click me
    </button>
  );
}

export default MyComponent;
```