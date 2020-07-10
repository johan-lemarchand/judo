<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TrainingRepository")
 * @ApiResource(normalizationContext={"groups"={"training_read"}})
 */
class Training
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups({"training_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=60)
     * @groups({"training_read"})
     */
    private $title;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @groups({"training_read"})
     */
    private $date;

    /**
     * @ORM\Column(type="text")
     * @groups({"training_read"})
     */
    private $content;

    /**
     * @ORM\Column(type="time")
     * @groups({"training_read"})
     */
    private $duration;

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

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

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

    public function getDuration(): ?\DateTimeInterface
    {
        return $this->duration;
    }

    public function setDuration(\DateTimeInterface $duration): self
    {
        $this->duration = $duration;

        return $this;
    }
}
