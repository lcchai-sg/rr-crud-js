export const Updateuser = () => {
    let email = "anonymous@a.com";
    let password = "anonymous";
    return (
        <div>
            <h1>Update User</h1>
            <form>
                <label>Email:</label>
                <input type="text" name="email" value={email} />
                <label>Password:</label>
                <input type="password" name="password" value={password} />
                <button>Submit</button>
            </form>
        </div>
    );
};
