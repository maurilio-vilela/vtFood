<script lang="ts">
    import { Col, Icon, Row } from 'sveltestrap';
</script>

        <nav class="menu-nav">
            <div class="navbar">
                <div class="containter">
                    <a href="/#" class="navbar-brand">
                        <Icon name="bar-chart-steps" />
                    </a>
                </div>
            </div>
        </nav>

        <nav class="menu">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">
                        <Icon name="bag-plus-fill" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#">
                        <Icon name="bag-check-fill" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#">
                        <Icon name="bag-x-fill" />
                    </a>
                </li>
            </ul>
        </nav>

<style>
    .menu{
        display: flex;
        align-self: flex-start;
    }
    .menu a{
        color: #FFFFFF;
        font-size: 3.2rem;

    }
    .menu a:hover{
        color: #FFC43D;
    }
    .menu a:active{
        color: #FFC43D;
    }
    .menu-nav{
        display: flex;
        align-self: flex-start;
    }
    .menu-nav a{
        color: #FFFFFF;
        font-size: 2rem;
    }
    .menu-nav a:hover{
        color: #FFC43D;
    }
</style>