import { HeaderMainDiv } from "./Header.styled";
import { Navbar, Link,  /*, Avatar, Dropdown */ } from "@nextui-org/react";
import logo from "../photo/logo.png"
import {  useLocation } from 'react-router-dom';

function Header() {

    const { pathname } = useLocation();

    return (
        <HeaderMainDiv>
            <Navbar isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    <img src={logo} alt="logo" className="logo_home" />
                    <p className="logo_text_home">
                        Chemistry
                    </p>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="secondary"
                    hideIn="xs"
                    variant="highlight-rounded"
                >
                    <Navbar.Link isActive={pathname === "/"} href="/">Home</Navbar.Link>
                    <Navbar.Link isActive={pathname === "/login"} href="/login">
                        Login
                    </Navbar.Link>
                    <Navbar.Link isActive={pathname === "/registration"} href="/registration">Registration</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    {/* <Dropdown placement="bottom-right">
                            <Navbar.Item>
                                <Dropdown.Trigger>
                                    <Avatar
                                        bordered
                                        as="button"
                                        color="secondary"
                                        size="md"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    />
                                </Dropdown.Trigger>
                            </Navbar.Item>
                            <Dropdown.Menu
                                aria-label="User menu actions"
                                color="secondary"
                                onAction={(actionKey) => console.log({ actionKey })}
                            >
                                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        Signed in as
                                    </Text>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        zoey@example.com
                                    </Text>
                                </Dropdown.Item>
                                <Dropdown.Item key="settings" withDivider>
                                    My Settings
                                </Dropdown.Item>
                                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                                <Dropdown.Item key="analytics" withDivider>
                                    Analytics
                                </Dropdown.Item>
                                <Dropdown.Item key="system">System</Dropdown.Item>
                                <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                                <Dropdown.Item key="help_and_feedback" withDivider>
                                    Help & Feedback
                                </Dropdown.Item>
                                <Dropdown.Item key="logout" withDivider color="error">
                                    Log Out
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                </Navbar.Content>
                <Navbar.Collapse>
                    <Navbar.CollapseItem>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="/"
                            isActive={pathname === "/"}
                        >
                            Home
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="/login"
                            isActive={pathname === "/login"}
                        >
                            Login
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="/registration"
                            isActive={pathname === "/registration"}
                        >
                            Registration
                        </Link>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </Navbar>
        </HeaderMainDiv>
    )
}
export default Header;