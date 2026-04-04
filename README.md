# Oneletrajz

Modern, statikus online oneletrajz Express szerverrel.

## Fajlstruktura (nem MVC)

```text
Me/
	public/
		index.html
		style.css
		...kepek
	src/
		server.js
		middleware/
			logger.js
	app.js
	package.json
```

## Futtatas

```bash
npm install
npm run dev
```

## Miert jo ez a struktura?

- Egyszeru, atlathato CV projekthez.
- A `public` tisztan frontend tartalom.
- A `src` tisztan szerver logika.
- Konnyen bovitheto kesobb adatbazisos modulokkal.

## Kesobbi bovites adatbazissal

Ha masik oldalhoz adatbazist adnal, ajanlott uj mappak:

```text
src/
	api/
		routes/
		controllers/
		services/
		repositories/
	db/
		client.js
```

Igy a CV oldal marad egyszeru, de az uj, dinamikus oldal szepen szeparalhato.
