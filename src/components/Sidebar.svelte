<script lang="ts">
    import { Container, Icon, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'sveltestrap';
</script>

<div class="menu-nav">
    <Navbar>
        <Container>
            <NavbarBrand href="/">
                <Icon name="bar-chart-steps" />
            </NavbarBrand>
        </Container>
    </Navbar>
</div>

<div class="menu">
    <Nav>
        <NavItem>
            <NavLink active href="/products">
                <i class="fa-duotone fa-burger-cheese"></i>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/#">
                <i class="fa-duotone fa-pizza"></i>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/#">
                <i class="fa-duotone fa-soft-serve"></i>
            </NavLink>
        </NavItem>
    </Nav>
</div>

<style>
    .menu{
        display: flex;
        align-self: flex-start;
    }
    :global(.menu a){
        color: #FFFFFF;
        font-size: 3.2rem;

    }
    :global(.menu a:hover){
        color: #FFC43D;
    }
    :global(.menu a:active){
        color: #FFC43D;
    }
    .menu-nav{
        display: flex;
        align-self: flex-start;
    }
    :global(.menu-nav a){
        color: #FFFFFF;
        font-size: 2rem;
    }
    :global(.menu-nav a:hover){
        color: #FFC43D;
    }
</style>