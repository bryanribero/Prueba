let user = {
  name: 'pedro',
  age: 23
}


function Button(){
 
  return (
    <button>{user.age}</button>
  );
}

export default function Home() {
  return (
    <div>
      <Button />
    </div>
  );
}
