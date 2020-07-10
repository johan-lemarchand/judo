<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\PresentationRepository")
 * @ApiResource(normalizationContext={"groups"={"presentation_read"}})
 */
class Presentation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups({"presentation_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message="le titre est obligatoire")
     * @groups({"presentation_read"})
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="le contenu est obligatoire")
     * @groups({"presentation_read"})
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @groups({"presentation_read"})
     * @Assert\Image(
     *      minWidth="50",
     *      maxWidth="250",
     *      minWidth="La largeur de l'image est trop petite ({{width}}px). La largeur minimale attendue est de {{min_width}}px.",
     *      maxWidthMessage="La largeur de l'image est trop grande ({{width}}px). La largeur maximale autorisée est de {{max_width}} px.",
     *      minHeight="50",
     *      maxHeight="250",
     *      minHeight="La hauteur de l'image est trop petite ({{heigth}}px). La hauteur minimale attendue est de {{min_heigth}}px.",
     *      maxHeightMessage="La hauteur de l'image est trop grande ({{heigth}}px). La hauteur maximale autorisée est de {{max_heigth}} px.",
     *      mimeTypesMessage = "Uniquement .jpeg .png .jpg and .gif est valide"
     * )
     */
    private $picture;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }
}
