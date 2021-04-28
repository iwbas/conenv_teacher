import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function SignUp({}) {
    return (
        <div className="d-flex align-items-center flex-column justify-content-center vh-100 bg-dark">
            <Card className="p-4">
                <h3 className="text-center mb-3">Регистрация</h3>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Электронная почта</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Введите email"
                        />
                    </Form.Group>
                    <Form.Group controlId="login">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control required placeholder="Введите логин" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="password1">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Введите пароль"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="password2">
                            <Form.Label>Повторение</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Повторите пароль"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="surname">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="patronymic">
                            <Form.Label>Отчество</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>
                    <Button
                        className="w-100 mt-2"
                        variant="primary"
                        type="submit"
                    >
                        Зарегистрироваться
                    </Button>
                </Form>
            </Card>
        </div>
    );
}

export default SignUp;
