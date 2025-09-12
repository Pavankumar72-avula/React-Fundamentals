function Profile(){
    const name="pavan";
    const Age="19"
    const isStudent=true;
    return (
        <div>
           
            <p>Name:{name}</p>
            <p>age:{Age}</p>
            <p>{isStudent===true?"this is pavan":"or not" }</p>
        </div>
    )
}

export default Profile