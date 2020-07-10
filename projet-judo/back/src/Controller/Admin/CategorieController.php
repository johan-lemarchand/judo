<?php

namespace App\Controller\Admin;

use App\Entity\Categorie;
use App\Repository\CategorieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/admin", name="api_admin_")
 */
class CategorieController extends AbstractController
{
    /**
     * @Route("/categories", name="categories_browse", methods={"GET"})
     */
    public function browse(CategorieRepository $categorieRepository, SerializerInterface $serializer)
    {
        // On récupère tout les articles
        $categorie = $categorieRepository->findAll();

        // Serializer sert à normaliser l'objet Article
        $data = $serializer->normalize($categorie, null, ['groups' => 'admin']);

        return $this->json($data);
    }

    /**
     * @Route("/categories/{id}", name="categories_read", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function read(Categorie $categorie, SerializerInterface $serializer)
    {
        return $this->json($serializer->normalize(
            $categorie,
            null, ['groups' => 'admin']
        ));
    }

    /**
     * @Route("/categories/edit", name="categories_edit", methods={"PATH"})
     */
    public function edit()
    {
        
    }

    /**
     * @Route("/categories/add", name="categories_add", methods={"POST"})
     */
    public function add()
    {
        
    }

    /**
     * @Route("/categories/{id}/delete", name="categories_delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {

    }
}
