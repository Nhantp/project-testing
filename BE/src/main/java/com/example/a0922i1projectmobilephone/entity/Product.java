package com.example.a0922i1projectmobilephone.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;


import lombok.*;
import javax.persistence.*;
import java.util.Set;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;
    @Column(name = "name_product")
    private String productName;
    @Column(name = "cost_product")
    private Integer costPrice;
    @Column(name = "selling_price_product")
    private Integer sellingPrice;
    @Column(name = "quantity_product")
    private Integer quantity ;
    @Column(name = "screen_size_product")
    private String screenSize;
    @Column(name = "front_camera_product")
    private String frontCamera;
    @Column(name = "back_camera_product")
    private String backCamera;
    @Column(name = "product_cpu_product")
    private String productCpu;
    @Column(name = "image_url_product")
    private String imageUrl;
    @Column(name = "product_storage_product")
    private String productStorage;
    @Column(name = "description_product")
    private String description;
    @OneToMany(mappedBy = "product" ,fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JsonBackReference
    private Set<InputInvoiceDetail> inputInvoiceDetails;
    @OneToMany(mappedBy = "product" ,fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JsonBackReference
    private Set<OutputInvoiceDetail> outputInvoiceDetails;
    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "categoryId", referencedColumnName = "categoryId")

    private Category category;
    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "brand_id", referencedColumnName = "brandId")
    private Brand brand;
    @Column(name = "delete_flag",columnDefinition = "Boolean default FALSE")
    Boolean deleteFlag;
    @Column(name = "is_publish", columnDefinition = "Boolean default FALSE")
    Boolean isPublish;
}
