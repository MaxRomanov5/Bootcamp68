

export default function Worker({ name,hendleIncome }) {
    
    return (
        <>
            <p>{name}</p>
            <button onClick={hendleIncome}> Income +10 </button></>
        
  )
}
