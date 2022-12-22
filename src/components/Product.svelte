<script lang="ts">
	import { supabase } from "$lib/db";
    import { onMount } from "svelte";
    import { Badge, Col, Figure, Icon, Image, Row } from "sveltestrap";

	let loading = false
	let name = ""
	let description = ""
	let image = ""
	let price = ""

	onMount(() => {
    	getProducts()
	})

	const getProducts = async () => {
		loading = true
		const { data:products, error } = await supabase
		.from('products')
		.select('*')
		if (products){
			console.log("Deu certo")
			name = products.name
			description = products.description
			image = products.image
			price = products.price
		}else{
            console.log(error)
        }
</script>
<Row cols={{ lg: 3, md: 2, sm: 1 }} class="g-3">
	<!-- Product Item Start-->
	<Col>
		<div class="p-3 product-item">
		<Row>
			<Col>
				<Badge pill color="danger">4</Badge>
			</Col>
		</Row>
		<Row>
			<Col class="title">
				{name}
			</Col>
		</Row>
		<Row>
			<Col>
				<Figure caption={description}>
					<Image fluid alt="Hamburger Artesanal" src={image}/>
				</Figure>
			</Col>
		</Row>
		<Row class="bottom-product">
			<Col xs="9">
				{price}
			</Col>
			<Col xs="3" class="add">
				<a href="#" class="btn btn-danger">
					<Icon name="plus" />
				</a>
			</Col>
		</Row>
	</div>
	</Col><!-- Product Item End-->
	<!-- Product Item Start-->
	<Col>
		<div class="p-3 product-item">
		<Row>
			<Col>
				<Badge pill color="danger">4</Badge>
			</Col>
		</Row>
		<Row>
			<Col class="title">
				Hamburger Artesanal
			</Col>
		</Row>
		<Row>
			<Col>
				<Figure caption="Pão de brioche, carne de 150g, 2 fatias e bacon, salada e queijo cheddar.">
					<Image fluid alt="Hamburger Artesanal" src="https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg" />
				</Figure>
			</Col>
		</Row>
		<Row class="bottom-product">
			<Col xs="9">
				R$ 250,00
			</Col>
			<Col xs="3" class="add">
				<a href="#" class="btn btn-danger">
					<Icon name="plus" />
				</a>
			</Col>
		</Row>
	</div>
	</Col><!-- Product Item End-->
	<!-- Product Item Start-->
	<Col>
		<div class="p-3 product-item">
		<Row>
			<Col>
				<Badge pill color="danger">4</Badge>
			</Col>
		</Row>
		<Row>
			<Col class="title">
				Hamburger Artesanal
			</Col>
		</Row>
		<Row>
			<Col>
				<Figure caption="Pão de brioche, carne de 150g, 2 fatias e bacon, salada e queijo cheddar.">
					<Image fluid alt="Hamburger Artesanal" src="https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg" />
				</Figure>
			</Col>
		</Row>
		<Row class="bottom-product">
			<Col xs="9">
				R$ 250,00
			</Col>
			<Col xs="3" class="add">
				<a href="#" class="btn btn-danger">
					<Icon name="plus" />
				</a>
			</Col>
		</Row>
	</div>
	</Col><!-- Product Item End-->
	<!-- Product Item Start-->
	<Col>
		<div class="p-3 product-item">
		<Row>
			<Col>
				<Badge pill color="danger">4</Badge>
			</Col>
		</Row>
		<Row>
			<Col class="title">
				Hamburger Artesanal
			</Col>
		</Row>
		<Row>
			<Col>
				<Figure caption="Pão de brioche, carne de 150g, 2 fatias e bacon, salada e queijo cheddar.">
					<Image fluid alt="Hamburger Artesanal" src="https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg" />
				</Figure>
			</Col>
		</Row>
		<Row class="bottom-product">
			<Col xs="9">
				R$ 250,00
			</Col>
			<Col xs="3" class="add">
				<a href="#" class="btn btn-danger">
					<Icon name="plus" />
				</a>
			</Col>
		</Row>
	</div>
	</Col><!-- Product Item End-->
	<!-- Product Item Start-->
	<Col>
		<div class="p-3 product-item">
		<Row>
			<Col>
				<Badge pill color="danger">4</Badge>
			</Col>
		</Row>
		<Row>
			<Col class="title">
				Hamburger Artesanal
			</Col>
		</Row>
		<Row>
			<Col>
				<Figure caption="Pão de brioche, carne de 150g, 2 fatias e bacon, salada e queijo cheddar.">
					<Image fluid alt="Hamburger Artesanal" src="https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg" />
				</Figure>
			</Col>
		</Row>
		<Row class="bottom-product">
			<Col xs="9">
				R$ 250,00
			</Col>
			<Col xs="3" class="add">
				<a href="#" class="btn btn-danger">
					<Icon name="plus" />
				</a>
			</Col>
		</Row>
	</div>
	</Col><!-- Product Item End-->
	<!-- Product Item Start-->
	<Col>
		<div class="p-3 product-item">
		<Row>
			<Col>
				<Badge pill color="danger">4</Badge>
			</Col>
		</Row>
		<Row>
			<Col class="title">
				Hamburger Artesanal
			</Col>
		</Row>
		<Row>
			<Col>
				<Figure caption="Pão de brioche, carne de 150g, 2 fatias e bacon, salada e queijo cheddar.">
					<Image fluid alt="Hamburger Artesanal" src="https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg" />
				</Figure>
			</Col>
		</Row>
		<Row class="bottom-product">
			<Col xs="9">
				R$ 250,00
			</Col>
			<Col xs="3" class="add">
				<a href="#" class="btn btn-danger">
					<Icon name="plus" />
				</a>
			</Col>
		</Row>
	</div>
	</Col><!-- Product Item End-->
</Row>
<style>
    :global(.products){
		display: flex;
		justify-content: space-around;
	}
	:global(.product-item){
		background-color: #000000;
		padding: 15px;
	}
	:global(.title){
		display: flex;
		font-size: 1.3rem;
		margin-bottom: -15px;
		font-weight: 600;
		justify-content: center;
		align-items: center;
	}
	:global(.bottom-product){
		display: flex;
		align-items: center;
		font-size: 1.2rem;
		font-weight: bold;
	}
	:global(.add a){
		font-size: 1.5rem;
		font-weight: bold;
		color: #ffffff;
		border-radius: 50%;
	}
</style>