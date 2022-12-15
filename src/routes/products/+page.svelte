<script lang="ts">
    import { Col, Row } from "sveltestrap";
    import Product from "../../components/Product.svelte";
</script>
<svelte:head>
    <title>vtFood - Produtos</title>
</svelte:head>

<Row>
    <Col xs="12">
    <h1 class="title">-Hamburguers</h1>
	<Product />
    </Col>
</Row>
<style>
    :global()
	.title{
        display: flex;
        text-transform: uppercase;
        font-family:'Poppins';
        font-weight: 400;
        font-size: 1.8rem;
        color: #FFFFFF;
        justify-content: flex-start;
        margin-bottom: 1.3rem;
    }
</style>
