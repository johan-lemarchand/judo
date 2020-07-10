<?php

namespace App\Controller\Admin;

use App\Entity\Sponsor;
use App\Repository\SponsorRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
     * @Route("api/admin", name="api_admin_")
     */
class SponsorController extends AbstractController
{
    /**
    * @Route("/sponsors", name="sponsors_browse", methods={"GET"})
    */
    public function browse(SponsorRepository $sponsorRepository, SerializerInterface $serializer)
    {
        
        $sponsors = $sponsorRepository->findAll();

        // On utilise le Serializer pour normaliser notre objet sponsors
        $data = $serializer->normalize($sponsors, null, ['groups' => 'admin']);

        return $this->json($data);
    }

    /**
     * @Route("/sponsors/{id}", name="sponsors_read", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function read(Sponsor $sponsor, SerializerInterface $serializer)
    {   
        return $this->json($serializer->normalize(
            $sponsor,
            null, ['groups' => ['admin']]
        ));
        }
        
        /**
     * @Route("sponsors/edit", name="sponsors_edit", methods={"PATCH"})
     */
    public function edit()
    {
       
        }
        

    /**
     * @Route("/sponsors/add", name="sponsors_add", methods={"POST"})
     */
    public function add()
    {
       
        }

        /**
     * @Route("/sponsors/{id}/delete", name="sponsors_delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {
       
        }
}
