<?php

namespace App\Controller\Admin;

use App\Entity\Training;
use App\Repository\TrainingRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
     * @Route("api/admin", name="api_admin_")
     */
    class TrainingController extends AbstractController
    {   /**
        * @Route("/trainings", name="trainings_browse", methods={"GET"})
        */
        public function browse(TrainingRepository $trainingRepository, SerializerInterface $serializer)
        {
            
            $trainings = $trainingRepository->findAll();
    
            // On utilise le Serializer pour normaliser notre objet trainings
            $data = $serializer->normalize($trainings, null, ['groups' => 'admin']);
    
            return $this->json($data);
        }
    
        /**
         * @Route("/trainings/{id}", name="trainings_read", methods={"GET"}, requirements={"id": "\d+"})
         */
        public function read(Training $training, SerializerInterface $serializer)
        {   
            return $this->json($serializer->normalize(
                $training,
                null, ['groups' => ['admin']]
            ));
            }
            
            /**
         * @Route("trainings/edit", name="trainings_edit", methods={"PATCH"})
         */
        public function edit()
        {
           
            }
            
    
        /**
         * @Route("/trainings/add", name="trainings_add", methods={"POST"})
         */
        public function add()
        {
           
            }
    
            /**
         * @Route("/trainings/{id}/delete", name="trainings_delete", requirements={"id": "\d+"}, methods={"DELETE"})
         */
        public function delete()
        {
           
            }
            
            
    
        
    }
