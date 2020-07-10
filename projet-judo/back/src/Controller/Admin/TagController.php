<?php

namespace App\Controller\Admin;

use App\Entity\Tag;
use App\Repository\TagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
* @Route("/api/admin/", name="api_admin_")
*/
class TagController extends AbstractController
{
    /**
     * @Route("/tags", name="tags_browse", methods={"GET"})
     */
    public function browse(TagRepository $tagRepository, SerializerInterface $serializer)
    {
        // On récupère tout les articles
        $tag = $tagRepository->findAll();

        // Serializer sert à normaliser l'objet Article
        $data = $serializer->normalize($tag, null, ['groups' => 'admin']);

        return $this->json($data);
    }

    /**
     * @Route("/tags/{id}", name="tags_read", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function read(Tag $tag, SerializerInterface $serializer)
    {
        return $this->json($serializer->normalize(
            $tag,
            null, ['groups' => 'admin']
        ));
    }

    /**
     * @Route("/tags/edit", name="tags_edit", methods={"PATH"})
     */
    public function edit()
    {
        
    }

    /**
     * @Route("/tags/add", name="tags_add", methods={"POST"})
     */
    public function add()
    {
        
    }

    /**
     * @Route("/tags/{id}/delete", name="tags_delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {

    }
}
