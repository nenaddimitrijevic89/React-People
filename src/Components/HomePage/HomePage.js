import React from 'react';
import { fetchUsers } from '../../services/fetch';
import { Header } from '../Header/Header';
import { Users } from '../HomePage/Users/Users';
import { Footer } from '../Footer/Footer';
import { Search } from '../HomePage/Search/Search';
import { storageService } from '../../services/StorageService';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.state = {
            isListView: true,
            users: [],
            filteredUsers: [],
            inputValue: "",
            isLoading: false,
            timeAgo: ""
        }
    }

    componentDidMount() {
        const savedUsers = storageService.get("users");
        const viewMode = storageService.get("isListView");
        if (!savedUsers) {
            this.getUsers()
        } else {
            this.setState({
                users: savedUsers,
                filteredUsers: savedUsers
            })
            this.setState({ isListView: viewMode })
        }
    }

    getUsers = () => {
        this.setState({ isLoading: true });

        fetchUsers()
            .then(data => {
                this.setState({ users: data, filteredUsers: data, inputValue: '', timeAgo: new Date() },
                    () => {
                        storageService.set("users", data)
                    })
            })
            .finally(() => this.setState({ isLoading: false }));
    }

    searchedUsers = (textInput) => {
        const newUsers = this.state.users.filter(user => {
            return user.firstName.toLowerCase().includes(textInput.toLowerCase()) || user.lastName.toLowerCase().includes(textInput.toLowerCase())
        });
        this.setState({
            inputValue: textInput,
            filteredUsers: newUsers
        })
    }

    onLayoutChange() {
        this.setState({ isListView: !this.state.isListView },
            () => {
                storageService.set("isListView", this.state.isListView)
            })
    }

    render() {
        return (
            <div>
                <Header isHomePage={true} isList={this.state.isListView} onLayoutChange={this.onLayoutChange} updateUsers={() => this.getUsers()} />
                <Search searchedUsers={this.searchedUsers} users={this.state.users} inputValue={this.state.inputValue} />
                <Users isList={this.state.isListView} users={this.state.filteredUsers} isLoading={this.state.isLoading} />
                <Footer time={this.state.timeAgo} />
            </div >
        );
    }
}

export { HomePage };