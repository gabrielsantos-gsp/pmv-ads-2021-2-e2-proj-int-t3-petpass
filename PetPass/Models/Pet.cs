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
        [Column(TypeName = "int")]
        [Required(ErrorMessage = "É obrigatório informar a idade aproximada (em anos) do Pet. Caso ele ainda não tenha completado 1 ano, digite 0")]
        public int IdadePet { get; set; }

        [Display(Name = "Idade (meses)")]
        [Column(TypeName = "int")]
        [Required(ErrorMessage = "É obrigatório informar a idade aproximada (em meses) do Pet.")]
        public int IdadePet2 { get; set; }

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

        [ForeignKey("UsuarioId")]
        public Usuario Usuario { get; set; }

        public ICollection<Vacina> Vacinas { get; set; }

    }

    public enum PetTipo
    {
        Cachorro,
        Gato
    }

    public enum PetSexo
    {
        Macho,
        Femea
    }

}
