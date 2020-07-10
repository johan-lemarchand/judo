<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentRepository")
 * @ApiResource(normalizationContext={"groups"={"comment_read"}})
 */
class Comment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups({"comment_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @groups({"comment_read"})
     * @Assert\NotBlank(message="Veuillez ajouter du contenu")
     */
    private $body;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Article", inversedBy="comment")
     * @groups({"comment_read"})
     */
    private $article;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): self
    {
        $this->article = $article;

        return $this;
    }
}
