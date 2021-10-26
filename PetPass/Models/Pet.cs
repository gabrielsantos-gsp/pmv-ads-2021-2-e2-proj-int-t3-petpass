using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PetPass.Models
{
    
    [Table("MeusPets")]
    public class Pet
    {
        [Key]
        public int IdPet { get; set; }

        [Display(Name = "Nome")]
        [Required(ErrorMessage = "É obrigatório informar o nome do Pet.")]
        public string NomePet { get; set; }

        [Display(Name = "Tipo")]
        [Required(ErrorMessage = "É obrigatório selecionar o tipo do Pet.")]
        public PetTipo TipoPet { get; set; }

        [Display(Name = "Raça")]
        [Required(ErrorMessage = "É obrigatório informar a raça do Pet.")]
        public string RacaPet { get; set; }

        [Display(Name = "Sexo")]
        [Required(ErrorMessage = "É obrigatório selecionar o sexo do Pet.")]
        public PetSexo SexoPet { get; set; }

        [Display(Name = "Idade (anos)")]
        [Column(TypeName = "decimal(18,2)")]
        [Required(ErrorMessage = "É obrigatório informar a idade aproximada do Pet.")]
        public decimal IdadePet { get; set; }

        [Display(Name = "Peso (kg)")]
        [Column(TypeName ="decimal(18,2)")]
        public decimal PesoPet { get; set; }

        [Display(Name = "Data de Nascimento")]
        [Required(ErrorMessage = "É obrigatório informar a data de nascimento do Pet.")]
        public DateTime DataNascPet { get; set; }

        [Display(Name = "Registro no PetPass")]
        [Required(ErrorMessage = "É obrigatório informar a data de registro.")]
        public DateTime DataRegPet { get; set; }

        [Display(Name = "Foto")]
        public string FotoPet { get; set; }

        public ICollection<Vacina> Vacinas { get; set; }

    }

    public enum PetTipo
    {
        Cao,
        Gato
    }

    public enum PetSexo
    {
        Macho,
        Femea
    }

}
