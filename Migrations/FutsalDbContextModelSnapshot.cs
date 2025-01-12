﻿// <auto-generated />
using FutsalAPI.DataContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FutsalAPI.Migrations
{
    [DbContext(typeof(FutsalDbContext))]
    partial class FutsalDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("FutsalAPI.modules.FutsalDetail", b =>
                {
                    b.Property<int>("FutsalId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("FutsalId"));

                    b.Property<string>("contactNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("futsalName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("location")
                        .IsRequired()
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("operationHours")
                        .IsRequired()
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("pricing")
                        .IsRequired()
                        .HasColumnType("nvarchar(15)");

                    b.HasKey("FutsalId");

                    b.ToTable("FutsalDetail");
                });
#pragma warning restore 612, 618
        }
    }
}
