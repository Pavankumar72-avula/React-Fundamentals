function UserAvatar(kee) {
return(
    <div> 
        <p><img src={card.jpg} alt="Avatar" /></p>
        <p>{kee.Name}</p>
        <p>{kee.Branch}</p>
        <p>{kee.Year}</p>
        <p>{kee.Course}</p>
    </div>
)
}
export default UserAvatar