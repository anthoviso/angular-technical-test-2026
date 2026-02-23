[← Back to summary](../README.md)

# Serveur d'API

Un serveur API est fourni avec deux routes.

Pour le lancer :

```
npm install
```

```
npm start
```

Les routes :

- `/all-categories`

  Cette route permet de récupérer l’ensemble des catégories.

  Elle ne prend rien en paramètre et renvoie une liste de catégories sous la forme suivante :

  ```
  {
    id: number;
    group?: {
      id: number;
      name: string;
      color: string;
    };
    wording: string;
    description: string;
  }
  ```

- `/visible-categories`

  Cette route permet de récupérer les catégories à afficher.

  Elle ne prend rien en paramètre et renvoie une liste d’ID de catégories sous la forme suivante :

  ```
  {
    id: number;
  }
  ```
