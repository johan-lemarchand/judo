<?php
namespace App\Controller\Admin;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
     * @Route("api/admin", name="api_admin_")
     */
class UserController extends AbstractController
{   /**
    * @Route("/users", name="users_browse", methods={"GET"})
    */
    public function browse(UserRepository $userRepository, SerializerInterface $serializer)
    {
        
        $users = $userRepository->findAll();

        // On utilise le Serializer pour normaliser notre objet users
        $data = $serializer->normalize($users, null, ['groups' => 'admin']);

        return $this->json($data);
    }

    /**
     * @Route("/users/{id}", name="users_read", methods={"GET"}, requirements={"id": "\d+"})
     */
    public function read(User $user, SerializerInterface $serializer)
    {   
        return $this->json($serializer->normalize(
            $user,
            null, ['groups' => ['admin']]
        ));
        }
        
        /**
     * @Route("users/edit", name="users_edit", methods={"PATCH"})
     */
    public function edit()
    {
       
        }
        

    /**
     * @Route("/users/add", name="users_add", methods={"POST"})
     */
    public function add()
    {
       
        }

        /**
     * @Route("/users/{id}/delete", name="users_delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {
       
        }
        
        

    
}