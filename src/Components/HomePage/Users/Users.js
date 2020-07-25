import React from 'react';
import { ListUser } from './ListUser/ListUser';
import { GridUser } from './GridUser/GridUser';
import './Users.css';
import { Container, Row } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { GenderCounter } from '../GenderCounter/GenderCounter';


class Users extends React.Component {


    render() {
        if (this.props.isLoading) {
            return <Loading />
        }
        if (!this.props.users.length) {
            return <Container>
                <Row>
                    <h4 className='textCenter'>Sorry, that user is not in our system &#x1F610;</h4>
                </Row>
            </Container>
        }
        let usersGrid = '';
        if (!this.props.isList) {
            usersGrid = 'usersGrid';
        }

        return (
            <div>
                <Container>
                    <Row className='rowMargin'>
                        <GenderCounter users={this.props.users} />
                    </Row>
                </Container>
                <Container className={`users ${usersGrid}`}>
                    <Row className='rowMargin'>
                        {this.props.users.map((user, i) => {
                            if (this.props.isList) {
                                return (
                                    <ListUser
                                        key={i}
                                        img={user.thumbImg}
                                        name={user.firstName}
                                        email={user.email}
                                        dob={user.dob}
                                        last={user.lastName}
                                        gender={user.gender}
                                    />
                                )
                            }

                            return (
                                <GridUser
                                    key={i}
                                    gender={user.gender}
                                    img={user.largeImg}
                                    name={user.firstName}
                                    email={user.email}
                                    dob={user.dob}
                                    gender={user.gender}
                                />
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export { Users };