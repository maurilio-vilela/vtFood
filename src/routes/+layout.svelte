<script lang="ts">
    import { Styles, Container, Row, Col } from "sveltestrap";
	import { supabase } from "$lib/db"
	import { invalidate } from "$app/navigation"
	import { onMount } from "svelte"
    import Sidebar from "../components/Sidebar.svelte";
	import logo from "../img/logo.svg";

	onMount(() => {
		const {
		data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
		invalidate('supabase:auth')
		})

		return () => {
		subscription.unsubscribe()
		}
	})
</script>
<main>
	<Container fluid>
		<Row class="app">
			<Col xs="1" class="bg-danger">
				<Container fluid class="sidebar">
					<Sidebar />
				</Container>
			</Col>
			<Col xs="11" class="content">
				<Container fluid>
				<Row>
					<Col md={{size:12}}>
						<a href="/">
							<img src="{logo}" alt="vtFood" width="200" />
						</a>
					</Col>
				</Row>
				<Row>
					<Container class="content-pages">
						<slot />
					</Container>
				</Row>
				</Container>
			</Col>
		</Row>
	</Container>
	<Styles />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Poppins:wght@300&family=Roboto:wght@300;400&display=swap');
	main{
		color:#FFFFFF;
		font-family: 'Roboto', 'Helvetica';
	}
	:global(.app){
		height: 100vh;
	}
	:global(.sidebar){
		display: flex;
		color: #FFFFFF;
		height: 100vh;
		justify-content: center;
		flex-wrap: wrap;
		}
	:global(.content){
		display: flex;
		flex-wrap: wrap;
		background-color: #201e1e;
		padding: 15px;
	}
	:global(.content-pages){
		display: flex;
		padding: 20px;
	}
</style>