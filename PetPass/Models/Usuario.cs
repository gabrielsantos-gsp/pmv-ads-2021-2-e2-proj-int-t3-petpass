using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PetPass.Models
{
    [Table("Usuarios")]
    public class Usuario
    {
        [Key]
        public int IdUsuario{ get; set; }

        [Required(ErrorMessage = "É obrigatório informar o nome.")]
        public string Nome { get; set; }

        [Display(Name = "E-mail")]
        [Required(ErrorMessage = "É obrigatório informar e-mail.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "É obrigatório informar uma senha.")]
        [DataType(DataType.Password)]
        public string Senha { get; set; }

    }

}
