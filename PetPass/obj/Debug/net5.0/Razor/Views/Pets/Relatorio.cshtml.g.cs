#pragma checksum "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "3c69afd3592fd2958c73ad41050b73fac7b91163"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Pets_Relatorio), @"mvc.1.0.view", @"/Views/Pets/Relatorio.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\_ViewImports.cshtml"
using PetPass;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\_ViewImports.cshtml"
using PetPass.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3c69afd3592fd2958c73ad41050b73fac7b91163", @"/Views/Pets/Relatorio.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"762db3437f85429c340d6206bb32f71bad1cabc1", @"/Views/_ViewImports.cshtml")]
    public class Views_Pets_Relatorio : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<PetPass.Models.Pet>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Index", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("btn btn-info"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
  
    ViewData["Title"] = "Relatorio";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h2>Dados do Pet</h2>\r\n\r\n<div>\r\n    <hr />\r\n    <dl class=\"row\">\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 13 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.NomePet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 16 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.NomePet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 19 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.TipoPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 22 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.TipoPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 25 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.RacaPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 28 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.RacaPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 31 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.SexoPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 34 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.SexoPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 37 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.IdadePet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 40 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.IdadePet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 43 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.IdadePet2));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 46 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.IdadePet2));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 49 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.PesoPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 52 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.PesoPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 55 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.DataNascPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 58 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.DataNascPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 61 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.DataRegPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 64 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.DataRegPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dd>\r\n        <dt class=\"col-sm-2\">\r\n            ");
#nullable restore
#line 67 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayNameFor(model => model.FotoPet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </dt>\r\n        <dd class=\"col-sm-10\">\r\n            ");
#nullable restore
#line 70 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
       Write(Html.DisplayFor(model => model.FotoPet));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
        </dd>
    </dl>
</div>

<div>
    <table class=""table"">
        <thead>
            <tr>
                <th>
                    Descrição da Vacina
                </th>
                <th>
                    Idade de Aplicação
                </th>
                <th>
                    Data de Aplicação
                </th>
                <th>
                    Dose Aplicada
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
");
#nullable restore
#line 95 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
             foreach (var item in Model.Vacinas.OrderByDescending(c => c.Data_Aplicacao))
            {

#line default
#line hidden
#nullable disable
            WriteLiteral("                <tr>\r\n                    <td>\r\n                        ");
#nullable restore
#line 99 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
                   Write(Html.DisplayFor(modelItem => item.Descricao));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    </td>\r\n                    <td>\r\n                        ");
#nullable restore
#line 102 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
                   Write(Html.DisplayFor(modelItem => item.Idade_Aplicacao));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    </td>\r\n                    <td>\r\n                        ");
#nullable restore
#line 105 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
                   Write(Html.DisplayFor(modelItem => item.Data_Aplicacao));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    </td>\r\n                    <td>\r\n                        ");
#nullable restore
#line 108 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
                   Write(Html.DisplayFor(modelItem => item.Dose_Aplicada));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    </td>\r\n                    <td>\r\n                        ");
#nullable restore
#line 111 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
                   Write(Html.DisplayFor(modelItem => item.Pet.NomePet));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    </td>\r\n\r\n                </tr>\r\n");
#nullable restore
#line 115 "C:\Users\Gabriel\source\repos\PetPass\PetPass\Views\Pets\Relatorio.cshtml"
            }

#line default
#line hidden
#nullable disable
            WriteLiteral("        </tbody>\r\n    </table>\r\n\r\n\r\n\r\n</div>\r\n\r\n<div>\r\n    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3c69afd3592fd2958c73ad41050b73fac7b9116313161", async() => {
                WriteLiteral("Voltar");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<PetPass.Models.Pet> Html { get; private set; }
    }
}
#pragma warning restore 1591
