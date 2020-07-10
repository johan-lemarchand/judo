<?php
namespace App\Service;


use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{


    private $targetDirectory;
    
    private $targetArticlesDirectory;
    private $targetEventsDirectory;

    private $targetSponsorsDirectory;


    public function __construct($targetDirectory, $targetArticlesDirectory, $targetSponsorsDirectory, $targetEventsDirectory)
    {
        
        $this->targetDirectory = $targetDirectory;
        $this->targetArticlesDirectory = $targetArticlesDirectory;
        $this->targetEventsDirectory = $targetEventsDirectory;
        $this->targetSponsorsDirectory = $targetSponsorsDirectory;
    }


    
    /**
     * Upload d'une image
     */
    public function uploadImageArticle(UploadedFile $file)
    {

        $fileName = uniqid().'.'.$file->guessExtension();
        $file->move($this->getTargetDirectory(), $fileName);
        return $fileName;
    }

    /**
     * Upload d'une image
     */
    public function uploadImageEvent(UploadedFile $file)
    {

        $fileName = uniqid().'.'.$file->guessExtension();
        $file->move($this->getTargetDirectory(), $fileName);
        return $fileName;
    }
    
    /**
     * Upload d'une image
     */
    public function uploadImageSponsors(UploadedFile $file)
    {

        $fileName = uniqid().'.'.$file->guessExtension();
        $file->move($this->getTargetDirectory(), $fileName);
        return $fileName;
    }

  

    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }

  



    /**
     * Get the value of targetImageDirectory
     */ 
    public function getTargetArticlesDirectory()
    {
        return $this->targetArticlesDirectory;
    }

    /**
     * Get the value of targetEventDirectory
     */ 
    public function getTargetEventsDirectory()
    {
        return $this->targetEventsDirectory;
    }

    /**
     * Get the value of targetSponsorsDirectory
     */ 
    public function getTargetSponsorsDirectory()
    {
        return $this->targetSponsorsDirectory;
    }
}