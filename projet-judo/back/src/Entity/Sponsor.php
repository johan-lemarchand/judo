<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SponsorRepository")
 * @ApiResource(normalizationContext={"groups"={"sponsor_read"}})
 */
class Sponsor
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups({"sponsor_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @groups({"sponsor_read"})
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=120)
     * @groups({"sponsor_read"})
     * @Assert\NotBlank(message="le titre est obligatoire")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @groups({"sponsor_read"})
     * @Assert\NotBlank(message="le contenu est obligatoire")
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=160)
     * @groups({"sponsor_read"})
     * @Assert\NotBlank(message="l'adresse est obligatoire")
     * @Assert\Length(max=255, maxMessage="le nombre de caractère maximal est dépassé", min=10, minMessage="le nombre de caractère est trop minime" )
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=10)
     * @groups({"sponsor_read"})
     * @Assert\Regex(
     *     pattern="/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/")
     * @Assert\NotBlank(message="Veuillez saisir un numéro de téléphone")
     * @Assert\Length(min=10, minMessage="Votre numéro de téléphone est incorrect", max=10, maxMessage="Votre numéro de téléphone est incorrect" )
     */
    private $telephone;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
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

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }
}
