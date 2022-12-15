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
			<Col xs="1" class="sidebar">
				<Container fluid>
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
	main{
		color:#FFFFFF;
		
	}
	:global(.app){
		height: 100vh;
	}
	:global(.sidebar){
		display: flex;
		flex-direction: column;
		background-color: #d12020;
		color: #FFFFFF;
		}
	:global(.content){
		display: flex;
		flex-wrap: wrap;
		background-color: #0e0d0d;
		padding: 15px;
	}
	:global(.content-pages){
		display: flex;
		padding: 20px;
	}
</style>