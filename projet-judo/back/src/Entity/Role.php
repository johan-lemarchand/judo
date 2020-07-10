<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\RoleRepository")
 * @ApiResource(normalizationContext={"groups"={"role_read"}})
 */
class Role
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups({"role_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @groups({"role_read", "user_read"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @groups({"role_read"})
     */
    private $roleString;

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getRoleString(): ?string
    {
        return $this->roleString;
    }

    public function setRoleString(string $roleString): self
    {
        $this->roleString = $roleString;

        return $this;
    }
}
