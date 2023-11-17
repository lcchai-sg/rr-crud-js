export const AddUser = () => {
    return (
        <div>
            <h1>Add new user</h1>
            <form>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="enter username"
                />
                <label>Email:</label>
                <input type="text" name="email" placeholder="enter email" />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="enter password"
                />
                <button>Submit</button>
            </form>
        </div>
    );
};
