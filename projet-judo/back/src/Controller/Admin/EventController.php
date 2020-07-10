<?php

namespace App\Controller\Admin;

use App\Entity\Event;
use App\Repository\EventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/admin", name="api_admin_")
 */
class EventController extends AbstractController
{
    /**
     * @Route("/events", name="events_browse", methods={"GET"})
     */
    public function browse(EventRepository $eventRepository, SerializerInterface $serializer)
    {
        // On récupère tout les articles
        $event = $eventRepository->findAll();

        // Serializer sert à normaliser l'objet Article
        $data = $serializer->normalize($event, null, ['groups' => 'admin']);

        return $this->json($data);
    }

    /**
     * @Route("/events/{id}", name="events_read", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function read(Event $event, SerializerInterface $serializer)
    {
        return $this->json($serializer->normalize(
            $event,
            null, ['groups' => 'admin']
        ));
    }

    /**
     * @Route("/events/edit", name="events_edit", methods={"PATH"})
     */
    public function edit()
    {
        
    }

    /**
     * @Route("/events/add", name="events_add", methods={"POST"})
     */
    public function add()
    {
        
    }

    /**
     * @Route("/events/{id}/delete", name="events_delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {

    }
}
