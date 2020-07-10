<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{

    /**
     * @Route("api/contact", name="api_contact", methods={"POST"})
     */
    public function index(Request $request, \Swift_Mailerr $mailer)
{
        

    $contactFormData = $request->getContent();

// Create a message
    $message = (new \Swift_Message('Hello Email'))
            ->setFrom($contactFormData['email'])
            ->setTo('ojudo.club@gmail.com')
            ->setBody(
                $contactFormData['title'],
                $contactFormData['content'],
                'text/plain'
              );
            
             
            $mailer->send($message);
                
     
 }
}